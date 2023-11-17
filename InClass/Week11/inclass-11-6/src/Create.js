import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

function Create(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(11.99);
    const [description, setDescription] = useState("");

    const handleDescChange = (event) => {
        setDescription(event.target.value)
    }

    return (
        <div>
            <h2> Add a new book </h2>
            <Form id="add">
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"
                                  value={title}
                                  required
                                  onChange={(e) => setTitle(e.target.value)}

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author"
                                  value={author}
                                  required
                                  onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Select aria-label="Default select example"
                                 value={price}
                                 required
                                 onChange={(e) => setPrice(e.target.value)}
                    >
                        <option>Select a price</option>
                        <option value="10.99">10.99</option>
                        <option value="11.99">11.99</option>
                        <option value="12.99">12.99</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3}
                                  value={description}
                                  onChange={handleDescChange}
                    />
                </Form.Group>
            </Form>
            <ol id="add">
                <li> Title: {title} </li>
                <li> Author: {author} </li>
                <li> Price: {price} </li>
                <li> Description: {description} </li>
            </ol>
        </div>
    );
}

export default Create;