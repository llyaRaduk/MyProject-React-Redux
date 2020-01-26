export const UsersAPI = {
  getProfile(userID) {
    return (
      fetch(`http://localhost:2000/Profile/${userID}`)
        .then(res => res.json())
    )
  },
  getUsers(currentPage, pageSize) {
    return (
      fetch(`http://localhost:2000/users?currentPage=${currentPage}&pageSize=${pageSize}`)
        .then(res => res.json())
    )
  },
  following(id) {
    return fetch(`http://localhost:2000/userss/${id}`)
      .then(res => res.json());
  }
}
