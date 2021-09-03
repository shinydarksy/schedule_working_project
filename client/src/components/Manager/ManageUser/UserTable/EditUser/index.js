import React, { useState, useEffect } from 'react'
import './style.css'
export default function EditUser({ userData, onClickCancel, onEditUser, showFromEdit, deleteUser }) {
    const [isAdmin, setIsAdmin] = useState(false)
    let [userUpdate, setUserUpdate] = useState({
        fullname: '',
        username: '',
        password: '',
        isadmin: false,
        salary: 0
    })

    useEffect(() => {
        if (userData) {
            setUserUpdate({
                fullname: userData.fullname,
                username: userData.username,
                password: userData.password,
                salary: userData.salary
            })
            setIsAdmin(userData.isadmin)
        }
    }, [setUserUpdate, userData])

    function onChangeText(e) {
        let temp = {}
        temp[e.target.name] = e.target.value
        setUserUpdate({ ...userUpdate, ...temp })
    }

    function onSubmitEdit(e) {
        e.preventDefault()
        const userUpdateData = {
            username:  userUpdate.username,
            password:  userUpdate.password,
            isAdmin: isAdmin,
            _id: userData._id
        }
        console.log(userUpdateData)
        onEditUser(userUpdateData)
    }

    function onClickIsAdmin(e) {
        setIsAdmin(e.target.checked)
    }

    function onClickDelete(e) {
        e.preventDefault()
        deleteUser(userData)
    }

    let editFrom = <div className="edit-user">
        <p className="title">Sửa thông tin đăng nhập</p>
        <form onSubmit={onSubmitEdit}>
            <div className="edit-item">
                <label >
                    Tên nhân viên
                    <input type="text" name="fullname" value={userUpdate.fullname} onChange={onChangeText} />
                </label>
            </div>
            <div className="edit-item">
                <label >
                    Tên tài khoản
                    <input type="text" name="username" value={userUpdate.username} onChange={(onChangeText)} />
                </label>
            </div>
            <div className="edit-item">
                <label>
                    Mật khẩu
                    <input type="text" name="password" value={userUpdate.password} onChange={(onChangeText)} />
                </label>
            </div>
            <div className="edit-item">
                <label>
                    Lương mỗi ca
                    <input type="text" name="salary" value={userUpdate.salary} onChange={(onChangeText)} />
                </label>
            </div>
            <div className="btn-checkbox">
                <label className="group-checkbox">Quyền admin
                    <input type="checkbox" checked={isAdmin} onChange={onClickIsAdmin} />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div id="group-btn">
                <button className="btn-edit">Chỉnh sửa</button>
                <button className="btn-edit" onClick={onClickDelete}>Xóa</button>
                <button className="btn-edit" onClick={onClickCancel}>Hủy</button>
            </div>

        </form>
    </div>

    return (
        <>
            {showFromEdit ? editFrom : ""}
        </>
    )
}
