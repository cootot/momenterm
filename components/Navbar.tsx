import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { GiTwoCoins } from "react-icons/gi";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className="navbar w-full h-16 fixed top-0 left-0 p-4 flex justify-between items-center px-[5vw] z-50">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleSidebar}
          className="text-[var(--text-color)] text-2xl p-2 rounded-md hover:bg-[var(--secondary-bg)] transition cursor-pointer"
        >
          <FiMenu />
        </button>

        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-[var(--text-color)] px-2 space-x-2"
        >
          <div className="bg-[var(--accent-color)] p-1 rounded mr-4">
          <svg
            version="1.0"
            className="w-8 h-8"
            viewBox="0 0 398.000000 410.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,410.000000) scale(0.100000,-0.100000)"
              fill="var(--alt-text-color)"
              stroke="none"
            >
              <path
                d="M1055 4071 c-123 -24 -262 -85 -390 -171 -299 -202 -559 -597 -613
-930 -40 -247 -5 -412 114 -535 73 -75 130 -99 234 -100 77 0 92 3 155 34 122
59 285 253 285 338 0 35 -29 73 -55 73 -32 0 -63 -24 -82 -63 -69 -141 -196
-247 -295 -247 -59 0 -86 11 -133 51 -142 125 -137 427 13 724 176 349 459
605 754 681 193 50 293 -9 350 -208 29 -100 31 -364 5 -517 -44 -258 -167
-596 -318 -876 -26 -50 -121 -185 -209 -300 -196 -256 -420 -587 -420 -621 0
-25 40 -74 60 -74 78 0 368 364 570 715 100 174 372 498 611 731 183 177 313
264 444 299 146 38 167 13 125 -150 -60 -233 -284 -659 -604 -1150 -147 -224
-214 -334 -221 -365 -9 -37 27 -80 66 -80 65 0 70 4 571 550 179 195 337 364
351 375 14 11 65 55 113 98 124 111 224 183 300 219 91 42 97 31 70 -132 -18
-113 -61 -257 -141 -475 -147 -400 -189 -516 -236 -655 -147 -432 -200 -801
-141 -987 39 -125 116 -202 243 -244 61 -20 94 -24 189 -24 125 1 225 22 350
73 76 32 96 63 69 110 -20 37 -59 39 -140 8 -188 -71 -386 -73 -496 -5 -121
75 -134 312 -39 702 45 185 100 351 263 792 162 437 206 585 222 736 18 188
-24 266 -144 263 -140 -4 -406 -198 -711 -520 -243 -256 -278 -291 -262 -264
8 14 42 70 75 125 197 328 355 667 397 854 20 88 20 125 1 183 -32 91 -110
127 -238 109 -195 -28 -362 -134 -619 -394 -87 -87 -158 -157 -158 -154 0 2
12 36 26 73 43 112 94 300 116 429 30 177 29 438 -1 555 -41 158 -114 264
-216 318 -40 21 -66 26 -135 28 -47 1 -103 -1 -125 -5z"
              />
              <path
                d="M3495 2458 c-28 -16 -30 -19 -76 -138 -207 -531 -341 -1031 -342
-1275 -1 -162 29 -226 128 -271 87 -41 237 -28 392 34 104 42 224 105 238 126
21 29 19 62 -5 86 -29 29 -63 25 -134 -15 -175 -98 -372 -145 -444 -106 -64
34 -53 213 34 573 l36 147 46 6 c273 35 495 76 516 95 23 23 24 65 1 90 -24
27 -56 26 -270 -9 -252 -41 -241 -41 -237 -12 6 37 97 298 158 451 59 147 64
180 34 210 -22 22 -45 25 -75 8z"
              />
            </g>
          </svg>
          </div>
          <span>MomenTerm</span>
        </Link>
      </div>

      {/* Hide login/signup on mobile */}
      <div className="hidden sm:flex items-center space-x-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignUpButton>
            <button className="button-outline">Sign up</button>
          </SignUpButton>
          <SignInButton>
            <button className="button">Log in</button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
