create table book_list (
    book_id SERIAL PRIMARY KEY,
    book_title VARCHAR(180),
    book_author VARCHAR(180),
    book_image TEXT,
    user_notes TEXT
);

