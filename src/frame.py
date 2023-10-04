
import cv2
import sys
import os

try:
    inputVideo = sys.argv[1]
except:
    print('please input filename as argv[1]')
    sys.exit(0)

inputPath = os.path.dirname(inputVideo)
print("splitting video into frames ---")
capture = cv2.VideoCapture(inputVideo)

frameNr = 0

while (True):
    success, frame = capture.read()

    frameNrWithZero = str(frameNr).rjust(5, '0')
    print('frame{0} processing ---'.format(frameNrWithZero))
    if success:
        cv2.imwrite('{0}/output/frame_{1}.jpg'.format(inputPath, frameNrWithZero), frame)

    else:
        break

    frameNr = frameNr+1

capture.release()
print("finished ---")
