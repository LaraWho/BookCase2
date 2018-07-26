update book_list 
set book_title = $1,
    book_author = $2,
    book_image = $3,
    user_notes = $4
where book_id = $5;