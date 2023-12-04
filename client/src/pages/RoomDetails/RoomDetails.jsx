import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/faraazhossainimran/stayVista/main/client/public/rooms.json")
      .then((res) => res.json())
      .then(data => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        if(singleRoom){
            setLoading(false);
        }
      });
  }, [id]);
  if (loading) {
    return <Loader></Loader>;
  }
  return <Container>
    <Helmet>
        <title>{`${room?.title}`}</title>
    </Helmet>
    <div>
        <div className="flex flex-col gap-6">header</div>
        <div className="">room info</div>
    </div>
  </Container>;
};

export default RoomDetails;
