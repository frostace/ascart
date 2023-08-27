
import cv2
print("splitting video into frames ---")
capture = cv2.VideoCapture(
    'C:/Users/cheny/Documents/Github/ascart/videos/IMG_E4714.MOV')

frameNr = 0

while (True):
    success, frame = capture.read()
    print('frame{frameNr} processing ---')

    if success:
        cv2.imwrite(
            f'C:/Users/cheny/Documents/Github/ascart/videos/output/frame_{frameNr}.jpg', frame)

    else:
        break

    frameNr = frameNr+1

capture.release()
print("finished ---")
