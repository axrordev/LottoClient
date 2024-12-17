import { useState } from "react";
import AdminLogIn from "./AdminLogIn";

const AdminDashboard = () => {
	const [isLoggedIn, setLoggedIn] = useState(
		localStorage.getItem("adminLoggedIn") === "true",
	);

	const handleLogin = (enteredUsername, enteredPassword) => {
		// Parolni tekshirish logikasini qo'shing
		if (enteredPassword === "12345" && enteredUsername === "axrordev") {
			setLoggedIn(true);
			localStorage.setItem("adminLoggedIn", "true");
		} else {
			alert("Parol noto'g'ri!");
		}
	};

	const handleLogout = () => {
		setLoggedIn(false);
		localStorage.setItem("adminLoggedIn", "false");
	};

	return (
		<div>
			{isLoggedIn ? (
				<div>
					<h1>Admin Dashboard</h1>
					<button onClick={handleLogout}>Chiqish</button>
					<div className="flex mt-4 justify-center items-center flex-col">
						<h1 className="mb-4">Komandalar</h1>
						<form>
							<h1>Angliya Premier Ligasi</h1>
							<select name="selectedFruit">
								<option value="apple">Apple</option>
								<option value="banana">Banana</option>
								<option value="orange">Orange</option>
							</select>
							<select name="selectedFruit">
								<option value="apple">Apple</option>
								<option value="banana">Banana</option>
								<option value="orange">Orange</option>
							</select>
						</form>
					</div>
				</div>
			) : (
				<AdminLogIn onLogin={handleLogin} />
			)}
		</div>
	);
};

export default AdminDashboard;
