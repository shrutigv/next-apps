import { useState } from "react";
import { Button, Input, Card } from "antd";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        // Replace with your authentication logic
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        try {
            const response = await fetch("https://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed. Please check your credentials.");
            }

            const data = await response.json();
            window.localStorage.setItem("studentid", data.studentId);
            window.location.href = "/home";
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8 }}>
            <Card><form onSubmit={handleSubmit}>
                            <h2 style={{ marginBottom:20 }}>Login</h2>
                <div style={{ marginBottom:20 }}>
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ width: "100%", padding: 8, marginTop: 4 }}
                        required
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="password">Password</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ width: "100%", padding: 8, marginTop: 4 }}
                        required
                    />
                </div>
                {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
                <Button type="primary" onClick={{handleSubmit}}>Login</Button>
            </form></Card>
            <Button type="link" href="/register" style={{ marginTop: 16 }}>
                Don't have an account? Register</Button>
        </div>
    );
}