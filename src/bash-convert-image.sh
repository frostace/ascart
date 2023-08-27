for i in {0..230};
    do ./ascii-image-converter.exe ../videos/output/frame_$i.jpg -W 100 --save-img ../videos/asciioutput/. --only-save;
done;