export enum Role {
  member = "member",
  staff = "staff",
  admin = "admin"
}

export interface UserProps {
  id: string;
  email: string;
  role: Role;
  updateEmail?: (id: string, newEmail: string) => {
    success: boolean;
    message: string;
  };
}

const User = ({ id, email, role}: UserProps) => {
  return (
    <>
      <p>Id: {id}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </>
  );
};

export default User;