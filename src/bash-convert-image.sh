resolution=$1
mkdir -p ../videos/asciioutput/$resolution

for i in {0..230};
    index=$(printf "%05d" $i)
    do ./ascii-image-converter.exe ../videos/output/frame_$index_output.jpg -W 100 --save-img ../videos/asciioutput/$resolution/. --only-save;
done;
