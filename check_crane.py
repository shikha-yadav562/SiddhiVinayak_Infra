import cv2

try:
    img = cv2.imread('images/tower crance.webp')
    print(f"Tower Crane dimensions: {img.shape}")
except:
    pass
