import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [roles, setRoles] = useState([]);

    const [form, setForm] = useState({
        users: { username: '', email: '', password: '' },
        books: {
            title: '',
            genre: '',
            description: '',
            author: '',
            publishDate: new Date().toISOString().substring(0, 10),
            coverFile: null,
            contentFile: null
        },
        genres: { name: '' },
        roles: { name: '' }
    });

    useEffect(() => {
        fetchData();
    }, []);

    const authHeader = () => {
        const token = localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    };

    const fetchData = async () => {
        try {
            const responses = await Promise.all([
                axios.get('http://localhost:3370/admin/users', { headers: authHeader() }),
                axios.get('http://localhost:3370/admin/books', { headers: authHeader() }),
                axios.get('http://localhost:3370/admin/genres', { headers: authHeader() }),
                axios.get('http://localhost:3370/admin/roles', { headers: authHeader() })
            ]);
            setUsers(responses[0].data);
            setBooks(responses[1].data);
            setGenres(responses[2].data);
            setRoles(responses[3].data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAdd = async (endpoint, data) => {
        if (endpoint === 'books') {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            try {
                await axios.post(`http://localhost:3370/admin/${endpoint}`, formData, {
                    headers: {
                        ...authHeader(),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                fetchData();
            } catch (error) {
                console.error(`Error adding ${endpoint}:`, error);
            }
        } else {
            try {
                await axios.post(`http://localhost:3370/admin/${endpoint}`, data, { headers: authHeader() });
                fetchData();
            } catch (error) {
                console.error(`Error adding ${endpoint}:`, error);
            }
        }
    };

    const handleUpdate = async (id, endpoint, data) => {
        try {
            await axios.put(`http://localhost:3370/admin/${endpoint}/${id}`, data, { headers: authHeader() });
            fetchData();
        } catch (error) {
            console.error(`Error updating ${endpoint}:`, error);
        }
    };

    const handleDelete = async (id, endpoint) => {
        try {
            await axios.delete(`http://localhost:3370/admin/${endpoint}/${id}`, { headers: authHeader() });
            fetchData();
        } catch (error) {
            console.error(`Error deleting ${endpoint}:`, error);
        }
    };

    const handleChange = (event, category) => {
        const { name, value, files } = event.target;
        setForm(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [name]: files ? files[0] : value
            }
        }));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Users</h2>
                <div>
                    <input name="username" value={form.users.username} onChange={(e) => handleChange(e, 'users')} placeholder="Username" />
                    <input name="email" value={form.users.email} onChange={(e) => handleChange(e, 'users')} placeholder="Email" />
                    <input name="password" value={form.users.password} onChange={(e) => handleChange(e, 'users')} placeholder="Password" />
                    <button onClick={() => handleAdd('users', form.users)}>Add User</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id, 'users')}>Delete</button>
                                <button onClick={() => handleUpdate(user.id, 'users', form.users)}>Update</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Books</h2>
                <div>
                    <input name="title" value={form.books.title} onChange={(e) => handleChange(e, 'books')} placeholder="Title" />
                    <input name="genre" value={form.books.genre} onChange={(e) => handleChange(e, 'books')} placeholder="Genre" />
                    <input name="description" value={form.books.description} onChange={(e) => handleChange(e, 'books')} placeholder="Description" />
                    <input name="author" value={form.books.author} onChange={(e) => handleChange(e, 'books')} placeholder="Author" />
                    <input type="date" name="publishDate" value={form.books.publishDate} onChange={(e) => handleChange(e, 'books')} />
                    <input type="file" name="coverFile" onChange={(e) => handleChange(e, 'books')} />
                    <input type="file" name="contentFile" onChange={(e) => handleChange(e, 'books')} />
                    <button onClick={() => handleAdd('books', form.books)}>Add Book</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Cover</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <img src={`data:image/jpeg;base64,${book.cover}`} alt={book.title} style={{ width: 50,height:"50" }} />
                            </td>
                            <td>
                                <button onClick={() => handleDelete(book.id, 'books')}>Delete</button>
                                <button onClick={() => handleUpdate(book.id, 'books', form.books)}>Update</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Genres</h2>
                <div>
                    <input name="name" value={form.genres.name} onChange={(e) => handleChange(e, 'genres')} placeholder="Genre Name" />
                    <button onClick={() => handleAdd('genres', form.genres)}>Add Genre</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {genres.map(genre => (
                        <tr key={genre.id}>
                            <td>{genre.id}</td>
                            <td>{genre.name}</td>
                            <td>
                                <button onClick={() => handleDelete(genre.id, 'genres')}>Delete</button>
                                <button onClick={() => handleUpdate(genre.id, 'genres', form.genres)}>Update</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Roles</h2>
                <div>
                    <input name="name" value={form.roles.name} onChange={(e) => handleChange(e, 'roles')} placeholder="Role Name" />
                    <button onClick={() => handleAdd('roles', form.roles)}>Add Role</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {roles.map(role => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>
                                <button onClick={() => handleDelete(role.id, 'roles')}>Delete</button>
                                <button onClick={() => handleUpdate(role.id, 'roles', form.roles)}>Update</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default AdminPage;
