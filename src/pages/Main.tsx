import Search from '../assets/search.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';

interface MainAccommodation {
  id: string;
  title: string;
  description: string;
  price: number;
  host: {
    id: string;
    name: string;
  };
  images: string[];
}

interface Accommodations {
  accommodations: MainAccommodation[];
}

const Main = () => {
  const navigate = useNavigate();

  const accommodations = [
    {
      id: '1',
      title: '편안한 공간',
      price: 10000,
      host: {
        id: '1',
        name: '호스트1',
      },
      images: ['https://images.unsplash.com/photo-1628585901557-0c7a9e4b0c8f'],
    },
    {
      id: '2',
      title: '편안한 공간',
      price: 10000,
      host: {
        id: '1',
        name: '호스트1',
      },
      images: ['https://images.unsplash.com/photo-1628585901557-0c7a9e4b0c8f'],
    },
    {
      id: '3',
      title: '편안한 공간',
      price: 10000,
      host: {
        id: '1',
        name: '호스트1',
      },
      images: ['https://images.unsplash.com/photo-1628585901557-0c7a9e4b0c8f'],
    },
    {
      id: '4',
      title: '편안한 공간',
      price: 10000,
      host: {
        id: '1',
        name: '호스트1',
      },
      images: ['https://images.unsplash.com/photo-1628585901557-0c7a9e4b0c8f'],
    },
  ];
  return (
    <StWrapper>
      <SearchBox>
        <Img src={Search} />
        <SearchQuestion>
          <SearchText>어디로 여행가세요?</SearchText>
          <SearchSubText>어디든지 · 언제든 일주일 · 게스트 추가</SearchSubText>
        </SearchQuestion>
      </SearchBox>
      <StRoomListContainer>
        {accommodations?.map((accommodation) => {
          const { id, title, price, host, images } = accommodation;

          return (
            <StRoomCard key={id} onClick={() => navigate(`/detail/${id}`)}>
              <StThumbnail src={images[0]} />
              <div>
                <h1>{title}</h1>
                <h2>호스트 : {host.name}님</h2>
                <p>₩{price} /인</p>
              </div>
            </StRoomCard>
          );
        })}
      </StRoomListContainer>
      <Footer />
    </StWrapper>
  );
};

export default Main;

const StWrapper = styled.main`
  width: 100%;
  margin-bottom: 100px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const StRoomListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 24px;
  padding: 0 24px 0 24px;
`;

const StRoomCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border-radius: 12px;

  cursor: pointer;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > h1 {
      font-weight: 500;
      font-size: 18px;
    }

    & > h2 {
      font-size: 15px;
      font-size: 15px;

      color: #6a6a6a;
    }

    & > p {
      font-weight: 400;
      font-size: 15px;
    }
  }
`;

const StThumbnail = styled.img`
  width: 100%;
  height: 287px;
  object-fit: cover;
  border-radius: 12px;
`;

const SearchBox = styled.div`
  margin: 14px 16px;
  gap: 10px;
  padding: 20px;
  height: 55px;
  border-radius: 1000px;
  box-shadow: 0 3px 10px rgba(0 0 0 / 0.1);
  display: flex;
  align-items: center;
`;

const SearchQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SearchText = styled.p`
  font-size: 14px;
`;

const SearchSubText = styled.p`
  font-size: 12px;
  color: #6a6a6a;
`;
