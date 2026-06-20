import { logoutAction } from "@/actions/auth.actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-red-500/90 text-slate-300 hover:text-white font-medium rounded-xl transition-colors duration-300 border border-transparent hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
        Sign Out
      </button>
    </form>
  );
}