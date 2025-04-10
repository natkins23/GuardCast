import { users, type User, type InsertUser, type ContactForm, type SavedContactForm } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactForm(form: ContactForm): Promise<SavedContactForm>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, SavedContactForm>;
  currentId: number;
  contactFormId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.currentId = 1;
    this.contactFormId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactForm(form: ContactForm): Promise<SavedContactForm> {
    const id = this.contactFormId++;
    const now = new Date();
    const savedForm: SavedContactForm = { 
      ...form, 
      id, 
      createdAt: now 
    };
    this.contactForms.set(id, savedForm);
    return savedForm;
  }
}

export const storage = new MemStorage();
