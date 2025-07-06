import { Inngest } from "inngest";
import { User } from "./models/User"; // Make sure you import your User model

// Step 1: Create a client
export const inngest = new Inngest({ id: "movie-ticket-bookings" });

// Step 2: Function to sync created users
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name} ${last_name}`,
      image: image_url,
    };

    await User.create(userData);
  }
);

// Step 3: Function to delete users
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await User.findByIdAndDelete(id);
  }
);

// update function

const syncUserUpdation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address,
      name: first_name+ ' ' +last_name,
      image: image_url,
    };

    await User.findByIdAndUpdate(id,userData);
  }
);


// Step 4: Export all functions
export const functions = [
    syncUserCreation, 
    syncUserDeletion, 
    syncUserUpdation];
