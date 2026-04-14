import Banner from "@/components/Home/Banner";
import FriendList from "@/components/Home/Friends/FriendList";
import FriendStats from "@/components/Home/Friends/FriendStats";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner />
      <div className="max-w-7xl mx-auto">
        <FriendStats />
        <FriendList />
      </div>
    </div>
  );
}
