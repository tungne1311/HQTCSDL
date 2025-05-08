import { createContext, useEffect, useState } from "react";



export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [showLogin, setShowLogin] = useState(false)
    const [user, setUser] = useState(null); // Lưu thông tin người dùng

  // Mô phỏng việc đăng nhập và phân quyền
    const loginUser = (role) => {
    const fakeUser = {
      id: 1,
      name: role === 'admin' ? 'Admin' : 'Employee',
      email: 'user@example.com',
      role: role,
    };
    setUser(fakeUser); // Giả lập người dùng đã đăng nhập
    };

    const logoutUser = () => {
        setUser(null); // Đăng xuất người dùng
    };


    
    const value = {
        showLogin,
        setShowLogin,
        user,          // Cung cấp thông tin người dùng
        loginUser,     // Cung cấp hàm đăng nhập
        logoutUser     // Cung cấp hàm đăng xuất

    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}