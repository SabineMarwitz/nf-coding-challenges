import type React from "react";

type Props = {
    id?: number;
    title: string;
    author: string;
    read?: boolean;
};

const Book: React.FC<Props> = ({ title, author}: Props) => {
    return <p>{title}, {author}</p>;
};

export default Book;