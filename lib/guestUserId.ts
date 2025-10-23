import { v4 as uuidv4 } from 'uuid';

export const getGuestUserId = (): string | void => {
  let guestUserId = localStorage.getItem("tfw-guestUserId");
  if (!guestUserId) {
    guestUserId = uuidv4();
    localStorage.setItem("tfw-guestUserId", guestUserId);
  }
  return guestUserId;
};
