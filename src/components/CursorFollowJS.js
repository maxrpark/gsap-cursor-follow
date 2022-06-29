import { useRef, useEffect } from "react";
import gsap from "gsap";

const CursorFollowTs = () => {
    const ball = useRef(null);
    const innerBall = useRef(null);

    let pos, mouse;

    if (typeof window !== "undefined") {
        pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        mouse = { x: pos.x, y: pos.y };
    }

    const moveCoursorFunc = (e) => {
        gsap.set(ball.current, { xPercent: -50, yPercent: -50 });
        const speed = 0.35;
        const xSet = gsap.quickSetter(ball.current, "x", "px");
        const ySet = gsap.quickSetter(ball.current, "y", "px");

        mouse.x = e.x;
        mouse.y = e.y;

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

        // run costume function
        const target = e.target;
        if (target && target.classList.contains("title")) {
        }
    };

    useEffect(() => {
        console.log("works");
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
