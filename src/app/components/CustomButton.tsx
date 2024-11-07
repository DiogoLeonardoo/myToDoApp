"use client";

type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({ label, onClick }: Props) => {
    const handleButtonClick = () => {
        onClick();
    }

    return (
        <button onClick={handleButtonClick} className="p-3 rounded-md text-white bg-blue-700">..</button>
    )
}