import cv2
import glob
import numpy as np
import os

for img_path in glob.glob('images/proj*.png'):
    img = cv2.imread(img_path)
    if img is None:
        continue
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Thresholding: The photos usually have white borders or are just bright,
    # but the blue background is darker.
    # A simple Canny edge detection + contour finding works well for photos on a solid/gradient bg.
    edges = cv2.Canny(gray, 50, 150)
    
    # Dilate edges to close gaps
    kernel = np.ones((5,5), np.uint8)
    closed = cv2.morphologyEx(edges, cv2.MORPH_CLOSE, kernel, iterations=3)
    
    contours, _ = cv2.findContours(closed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    idx = 1
    for c in contours:
        x, y, w, h = cv2.boundingRect(c)
        area = w * h
        
        # Filter for large rectangular areas that are likely photos
        if area > 15000 and 0.2 < w/h < 5.0:
            # Add a small heuristic to avoid cropping the entire slide
            if area < (img.shape[0]*img.shape[1] * 0.9):
                cropped = img[y:y+h, x:x+w]
                out_path = img_path.replace('.png', f'_{idx}.jpg')
                cv2.imwrite(out_path, cropped)
                print(f"Extracted {out_path} from {img_path}, size: {w}x{h}")
                idx += 1
