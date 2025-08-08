import { useEffect, useState } from "react";
import { UserIcon } from "lucide-react";

import Get_Videos from "./services/get_videos";

import Sidebar from "./components/sidebar";
import BackgroundMedia from "./components/background_media";
import { Hero, HeroBody, HeroContent } from "./components/styled/hero";
import {
  Actions,
  IconInfo,
  IconPlay,
  Kicker,
  Meta,
  Summary,
  Title,
  Button,
  Row,
  Card,
  RowTitle,
  Scroller,
  Shell,
  SidebarSlot,
  Main
} from "./components/styled/shared";

import type { T_VideoItem } from "./types/video.types";
import Carousel from "./components/carousel";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function App() {
  const [items, setItems] = useState<T_VideoItem[]>([]);
  const [featured, setFeatured] = useState<T_VideoItem | null>(null);
  const [loading, setLoading] = useState(true);

  const [showVideo, setShowVideo] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const timeout_id = setTimeout(async () => {
          const { featured, trending } = await Get_Videos();
          setItems(trending);
          setFeatured(featured);
        }, 1200)
        setLoading(false);

        return () => clearTimeout(timeout_id)
      } catch (e) {
        setLoading(false);
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setShowVideo(false);
    if (!featured?.VideoUrl || prefersReduced) return;

    const t = setTimeout(() => setShowVideo(true), 2000);
    return () => clearTimeout(t);
  }, [featured?.Id, featured?.VideoUrl, prefersReduced]);

  return (
    <Shell>
      <SidebarSlot>
        <Sidebar
          activeKey="home"
          onNavigate={(key: any) => console.log("goto:", key)}
          user={{ name: "Daniel", avatar: <UserIcon /> }}
        />
      </SidebarSlot>
      <Main>
        {featured ?
          <Hero bg={featured.CoverImage}>
            <BackgroundMedia
              backdrop={featured.CoverImage}
              videoUrl={featured.VideoUrl}
              showVideo={showVideo}
            />
            <HeroBody>
              <HeroContent>
                <Kicker>Movie</Kicker>
                <Title>{featured.Title}</Title>
                <Meta>
                  <span>{new Date(featured.Date).getFullYear()}</span>
                  <span>{featured.MpaRating}</span>
                  <span>{`${Number(featured.Duration) / 6000}h`}</span>
                </Meta>
                <Summary>
                  {featured.Description}
                </Summary>
                <Actions>
                  <Button><IconPlay /> Play</Button>
                  <Button variant="ghost"><IconInfo /> More Info</Button>
                </Actions>
              </HeroContent>
            </HeroBody>
          </Hero> :
          <div style={{ padding: 24, opacity: .8, marginLeft: 40 }}>{"Loading…"}</div>
        }
        {items && featured && <Row>
          <RowTitle>Trending Now</RowTitle>
          <Carousel items={items} onSlideClick={setFeatured} />
        </Row>}
      </Main>
    </Shell >
  );
}

export default App;

