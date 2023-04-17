import { useState } from "react"

const FunctionForm = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            name: user.name,
            email: user.email,
            password: user.password
        })
        console.log(user)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Class Form</h1>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FunctionForm