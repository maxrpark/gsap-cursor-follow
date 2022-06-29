import { useRef, useEffect } from "react";
import gsap from "gsap";
interface Cordinates {
    x: number;
    y: number;
}

const CursorFollowTs: React.FC = () => {
    const ball = useRef<HTMLDivElement>(null!);
    const innerBall = useRef<HTMLDivElement>(null!);

    let pos: Cordinates;
    let mouse: Cordinates;
    if (typeof window !== "undefined") {
        pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        mouse = { x: pos.x, y: pos.y };
    }

    const moveCoursorFunc = (e: MouseEvent): void => {
        gsap.set(ball.current, { xPercent: -50, yPercent: -50 });
        const speed = 0.35;
        const xSet = gsap.quickSetter(ball.current, "x", "px");
        const ySet = gsap.quickSetter(ball.current, "y", "px");

        mouse!.x = e!.x;
        mouse!.y = e!.y;

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

        // run costume function
        const target = e.target as HTMLElement;
        if (target && target.classList.contains("title")) {
            gsap.from(".title", {
                rotate: 360,
            });
        }
    };

    useEffect(() => {
        const media_query = "screen and (min-width:1300px)";
        const matched = window.matchMedia(media_query).matches;
        if (matched) {
            window.addEventListener("mousemove", moveCoursorFunc);
        }
        return () => {
            window.removeEventListener("mousemove", moveCoursorFunc);
        };
    });
    return (
        <section>
            <div className='ball' ref={ball}>
                <div className='ball-inner' ref={innerBall}></div>
            </div>
        </section>
    );
};

export default CursorFollowTs;
