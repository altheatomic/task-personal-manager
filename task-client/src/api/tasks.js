import api from "./client";

export const getTasks = async (status) => {
    const res = await api.get("/tasks", {
        params: status ? { status } : {}
    });
    return res.data;
};

export const getTask = async (id) => {
    const res = await api.get(`/tasks/${id}`);
    return res.data;
};

export const createTask = async (payload) => {
    const res = await api.post("/tasks", payload);
    return res.data;
};

export const updateTask = async (id, payload) => {
    await api.put(`/tasks/${id}`, payload);
};

export const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
};
