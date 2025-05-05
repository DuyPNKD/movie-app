import React, {useRef, useState, useEffect} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Slider from "@react-native-community/slider";
import {Video} from "expo-av";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faExpand, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import * as ScreenOrientation from "expo-screen-orientation";

// Utility function to format time (mm:ss)
const formatTime = (millis) => {
    if (!millis) return "00:00";
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const VideoPlayer = ({source}) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [showOverlay, setShowOverlay] = useState(true);
    const [fadeTimeout, setFadeTimeout] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Hàm thay đổi hướng màn hình
    const changeScreenOrientation = async (isFullscreen) => {
        try {
            if (isFullscreen) {
                // Xoay ngang (landscape)
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            } else {
                // Khôi phục dọc (portrait)
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            }
        } catch (error) {
            console.error("Error changing screen orientation:", error);
        }
    };

    // Toggle play/pause
    const togglePlayPause = () => {
        if (status.isPlaying) {
            video.current.pauseAsync();
        } else {
            video.current.playAsync();
        }
        setShowOverlay(true);
        resetFadeTimer();
    };

    // Toggle fullscreen và xoay màn hình
    const toggleFullscreen = async () => {
        try {
            if (isFullscreen) {
                await video.current.dismissFullscreenPlayer();
                setIsFullscreen(false);
                await changeScreenOrientation(false); // Khôi phục portrait
            } else {
                await video.current.presentFullscreenPlayer();
                setIsFullscreen(true);
                await changeScreenOrientation(true); // Xoay landscape
            }
            setShowOverlay(true);
            resetFadeTimer();
        } catch (error) {
            console.error("Error toggling fullscreen:", error);
        }
    };

    // Handle seeking with the slider
    const handleSeek = (value) => {
        video.current.setPositionAsync(value);
        setShowOverlay(true);
        resetFadeTimer();
    };

    // Seek forward/backward by 10 seconds
    const seekForward = () => {
        const newPosition = Math.min((status.positionMillis || 0) + 10000, status.durationMillis || 0);
        video.current.setPositionAsync(newPosition);
        setShowOverlay(true);
        resetFadeTimer();
    };

    const seekBackward = () => {
        const newPosition = Math.max((status.positionMillis || 0) - 10000, 0);
        video.current.setPositionAsync(newPosition);
        setShowOverlay(true);
        resetFadeTimer();
    };

    const toggleMute = () => {
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);
        video.current.setIsMutedAsync(newMutedState);
        setShowOverlay(true);
        resetFadeTimer();
    };

    // Reset the fade timer for the overlay
    const resetFadeTimer = () => {
        if (fadeTimeout) {
            clearTimeout(fadeTimeout);
        }
        const timeout = setTimeout(() => {
            setShowOverlay(false);
        }, 5000);
        setFadeTimeout(timeout);
    };

    // Show overlay when interacting with the video
    const handleOverlayPress = () => {
        setShowOverlay(true);
        resetFadeTimer();
    };

    // Start the fade timer when the video starts playing
    useEffect(() => {
        if (status.isPlaying) {
            resetFadeTimer();
        }
        return () => {
            if (fadeTimeout) {
                clearTimeout(fadeTimeout);
            }
        };
    }, [status.isPlaying]);

    // Xử lý sự kiện thay đổi trạng thái toàn màn hình
    useEffect(() => {
        const handleFullscreenUpdate = async ({fullscreen}) => {
            setIsFullscreen(fullscreen);
            await changeScreenOrientation(fullscreen);
        };

        // Đăng ký sự kiện onFullscreenUpdate
        const subscription = video.current ? {onFullscreenUpdate: handleFullscreenUpdate} : null;

        return () => {
            if (subscription) {
                // Cleanup nếu cần
            }
            // Khôi phục hướng dọc khi component unmount
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                source={source}
                style={styles.video}
                resizeMode={isFullscreen ? "contain" : "cover"}
                useNativeControls={false}
                onPlaybackStatusUpdate={setStatus}
                onFullscreenUpdate={({fullscreen}) => {
                    setIsFullscreen(fullscreen);
                    changeScreenOrientation(fullscreen);
                }}
            />
            <TouchableOpacity style={styles.overlay} onPress={handleOverlayPress} activeOpacity={1}>
                {showOverlay && (
                    <View style={styles.overlayContent}>
                        <View style={styles.centerControls}>
                            <TouchableOpacity onPress={seekBackward}>
                                <FontAwesome name="backward" size={30} color="#fff" />
                                <Text style={styles.seekText}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={togglePlayPause} style={styles.playButton}>
                                <FontAwesomeIcon icon={status.isPlaying ? faPause : faPlay} size={40} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={seekForward}>
                                <FontAwesome name="forward" size={30} color="#fff" />
                                <Text style={styles.seekText}>10</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.progressContainer}>
                            <Text style={styles.timeText}>{formatTime(status.positionMillis)}</Text>
                            <Slider style={styles.slider} minimumValue={0} maximumValue={status.durationMillis || 0} value={status.positionMillis || 0} onSlidingComplete={handleSeek} minimumTrackTintColor="#1e90ff" maximumTrackTintColor="#666" thumbTintColor="#fff" />
                            <Text style={styles.timeText}>{formatTime(status.durationMillis)}</Text>
                        </View>
                        <View style={styles.bottomControls}>
                            <View style={styles.leftControls}>
                                <TouchableOpacity onPress={togglePlayPause} style={styles.controlButton}>
                                    <FontAwesomeIcon icon={status.isPlaying ? faPause : faPlay} size={20} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleMute} style={styles.controlButton}>
                                    <FontAwesome name={isMuted ? "volume-off" : "volume-up"} size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rightControls}>
                                <TouchableOpacity onPress={toggleFullscreen} style={styles.controlButton}>
                                    <FontAwesomeIcon icon={faExpand} size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        alignSelf: "center",
    },
    video: {
        width: "100%",
        height: 200,
        backgroundColor: "#000",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    overlayContent: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "space-between",
    },
    centerControls: {
        paddingTop: 30,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
    },
    playButton: {
        borderRadius: 50,
        padding: 15,
    },
    seekText: {
        color: "#fff",
        fontSize: 12,
        position: "absolute",
        top: -15,
        left: 5,
    },
    progressContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 0,
        gap: 10,
    },
    timeText: {
        color: "#fff",
        fontSize: 14,
    },
    slider: {
        flex: 1,
        height: 40,
    },
    bottomControls: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    leftControls: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    rightControls: {
        flexDirection: "row",
        alignItems: "center",
    },
    controlButton: {
        padding: 8,
    },
});

export default VideoPlayer;
