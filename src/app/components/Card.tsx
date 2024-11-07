import { ReactNode } from "react";

type Props = {
    phrase: string;
    author?: string;
}

export const Card = ({ phrase, author }: Props) => {
    return (
        <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic">
            <h3 className="text-right font-bold italic">{phrase}</h3>

            {author && 
                <p className="text-right text-sm">{author}</p>
            }   
            {!author &&
                <p className="text-right text-sm italic">Autor desconhecido</p>}
        </div>           
    );
}
