import { useEffect, useState } from "react";

const useTypingEffect = (input, delay = 100) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz áàảãạăắằẳẵặâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ";
    const [text, setText] = useState("");

    useEffect(() => {
        let tempText = "";
        let isMounted = true; // Để tránh memory leak khi component unmount

        const processText = async () => {
            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (!isMounted) return; // Nếu component bị unmount, dừng hàm ngay lập tức

                    await new Promise((resolve) => setTimeout(resolve, delay));

                    setText(tempText + alphabet[j]); // Hiển thị từng ký tự

                    if (input[i] === alphabet[j]) {
                        tempText += alphabet[j]; // Cập nhật giá trị chính xác
                        break;
                    }
                }
            }
        };

        processText();

        return () => {
            isMounted = false; // Cleanup để tránh cập nhật state khi unmount
        };
    }, [input, delay]);

    return text;
};

export default useTypingEffect;
