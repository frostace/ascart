import colorsys
from PIL import Image
import os

pink_sat = 0.5

def process(filename, target_hue = 0, saturation_weight = 1):
    # target color hue: red=0(0/360), green=0.33(120/360), blue=0.66(240/360)
    # saturation_weight: 1 - use saturation value of the original pixel; 0 - use pink_sat

    # read image, convert to RGB color space
    image = Image.open(filename).convert('RGB')

    # split rgb color
    image.load()
    r, g, b = image.split()
    result_r, result_g, result_b = [], [], []
    # process each pixel
    for pixel_r, pixel_g, pixel_b in zip(r.getdata(), g.getdata(), b.getdata()):
        # convert to HSV color space
        h, s, v = colorsys.rgb_to_hsv(pixel_r / 255., pixel_b / 255., pixel_g / 255.)
        # use weighted saturation
        target_sat = (saturation_weight) * s + (1 - saturation_weight) * pink_sat
        # convert back to RGB color space
        rgb = colorsys.hsv_to_rgb(target_hue, target_sat, v)
        pixel_r, pixel_g, pixel_b = [int(x * 255.) for x in rgb]
        # save each pixel
        result_r.append(pixel_r)
        result_g.append(pixel_g)
        result_b.append(pixel_b)

    r.putdata(result_r)
    g.putdata(result_g)
    b.putdata(result_b)

    # merge image
    image = Image.merge('RGB', (r, g, b))
    # save image
    filename_without_ext = os.path.splitext(filename)[0]
    image.save(filename_without_ext + '_output.png')

# assign directory
directory = '../videos/output'

# iterate over files in
# that directory
filenames = os.listdir(directory)
filenames.sort()

hue_start = 120.0/360
hue_end = 351.0/360
hue_step = (hue_end - hue_start) / (len(filenames) - 1)

weight_start = 1
weight_end = 0
weight_step = (weight_end - weight_start) / (len(filenames) - 1)

for index, filename in enumerate(filenames):
    hue = hue_start + index * hue_step
    weight = weight_start + index * weight_step
    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        print(f, index)
        process(f, hue, weight)
