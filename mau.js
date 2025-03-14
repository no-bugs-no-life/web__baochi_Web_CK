document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const toggleIcon = document.getElementById("toggle-icon");
    const body = document.body;

    // Kiểm tra nếu đã lưu chế độ trước đó
    if (localStorage.getItem("theme") === "light") {
        body.classList.remove("bg-gray-900");
        body.classList.add("bg-white", "text-black");
        toggleIcon.textContent = "☀️"; // Biểu tượng mặt trời cho Light Mode
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("bg-gray-900")) {
            // Chuyển sang Light Mode
            body.classList.remove("bg-gray-900", "text-white");
            body.classList.add("bg-white", "text-black");
            toggleIcon.textContent = "☀️"; // Biểu tượng mặt trời
            localStorage.setItem("theme", "light");
        } else {
            // Chuyển sang Dark Mode
            body.classList.remove("bg-white", "text-black");
            body.classList.add("bg-gray-900", "text-white");
            toggleIcon.textContent = "🌙"; // Biểu tượng mặt trăng
            localStorage.setItem("theme", "dark");
        }
    });
});
module.exports = {
    darkMode: 'class', // Bật chế độ dark mode theo class
    theme: {
        extend: {},
    },
    plugins: [],
}
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

toggle.addEventListener("change", () => {
    console.log("Toggle changed!"); // Kiểm tra xem sự kiện có chạy không
    if (toggle.checked) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        console.log("Chế độ sáng được bật");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        console.log("Chế độ tối được bật");
    }
});


