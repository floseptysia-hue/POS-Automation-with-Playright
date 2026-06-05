import { company } from "../../../core/company";

export const authData = {

  validUser: {
    username: company.credentials.username,
    password: company.credentials.password
  },

  invalidPassword: {
    username: company.credentials.username,
    password: "salah"
  },

  invalidUser: {
    username: "salah",
    password: company.credentials.password
  }

};