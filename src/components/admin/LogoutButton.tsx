import { logoutAction } from "@/actions/auth.actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="border px-4 py-2"
      >
        Logout
      </button>
    </form>
  );
}