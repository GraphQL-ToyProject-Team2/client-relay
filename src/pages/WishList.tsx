import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronLeft } from '@material-ui/icons';
import Footer from '../components/Footer';

interface WishListAccommodation {
  id: string;
  title: string;
  description: string;
  price: number;
  host: {
    id: string;
    name: string;
  };
  images: string[];
  isLiked: boolean;
}

interface Accommodations {
  accommodations: WishListAccommodation[];
}

const WishList = () => {
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
      isLiked: true,
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
      isLiked: true,
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
      isLiked: true,
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
      isLiked: true,
    },
  ];
  const likedAccommodations = accommodations?.filter((item) => item.isLiked);

  return (
    <StWrapper>
      <Header>
        <button onClick={() => navigate(-1)}>
          <StyledChevronLeft fontSize="large" />
        </button>
      </Header>
      <StRoomListContainer>
        {likedAccommodations?.length === 0 ? (
          <Text>마음에 드는 숙소에 좋아요를 눌러보세요.</Text>
        ) : (
          likedAccommodations?.map((accommodation) => {
            const { id, title, price, host, images } = accommodation;

            return (
              <StRoomCard key={id} onClick={() => navigate(`/detail/${id}`)}>
                <StThumbnail src={images[0]} />
                <div>
                  <h1>{title}</h1>
                  <h2>호스트 : {host.name}님</h2>
                  <p>₩{price} /박</p>
                </div>
              </StRoomCard>
            );
          })
        )}
      </StRoomListContainer>
      <Footer />
    </StWrapper>
  );
};

export default WishList;

const StWrapper = styled.main`
  width: 100%;
  margin-bottom: 100px;
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  z-index: 1;
  border-bottom: 1px solid rgb(235 235 233);
  width: 100%;
`;

const StyledChevronLeft = styled(ChevronLeft)`
  font-size: 16px;
`;

const Text = styled.p`
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
