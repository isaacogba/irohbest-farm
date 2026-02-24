import { toast } from "react-toastify";
import { PROPERTIES } from "../constant/data";

const STORAGE_KEY = "speedlix_properties";
const FAV_KEY = "speedlix_favourites";
const BOOKINGS_KEY = "speedlix_bookings";

const readStored = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = PROPERTIES.map((p, i) => ({ id: String(i + 1), ...p }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
    return readStored();
  }
};

export const getAllProperties = async () => {
  try {
    const list = readStored();
    return [...list].reverse();
  } catch (e) {
    toast.error("Something went wrong fetching properties");
    throw e;
  }
};

export const getProperty = async (id) => {
  const list = readStored();
  const found = list.find((p) => String(p.id) === String(id));
  if (!found) {
    toast.error("Property not found");
    throw new Error("Not found");
  }
  return found;
};

export const createUser = async () => {
  return;
};

export const bookVisit = async (visitData, propertyId) => {
  try {
    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
    bookings.push({ id: Date.now().toString(), propertyId, ...visitData });
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  } catch (e) {
    toast.error("Something went wrong while booking");
    throw e;
  }
};

export const removeBooking = async (id) => {
  try {
    let bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
    bookings = bookings.filter((b) => String(b.id) !== String(id));
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  } catch (e) {
    toast.error("Something went wrong removing booking");
    throw e;
  }
};

export const getAllBookings = async () => {
  return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
};

export const createResidency = async (data) => {
  try {
    const list = readStored();
    const id = Date.now().toString();
    const entry = { id, ...data };
    list.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    toast.success("Property created locally");
    return entry;
  } catch (e) {
    toast.error("Something went wrong creating property");
    throw e;
  }
};

export const toFav = async (id) => {
  try {
    const favs = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
    const exists = favs.includes(id);
    const updated = exists ? favs.filter((f) => f !== id) : [...favs, id];
    localStorage.setItem(FAV_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    toast.error("Could not update favourites");
    throw e;
  }
};

export const getAllFav = async () => {
  return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
};
