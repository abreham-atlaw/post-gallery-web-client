import ExhibitionDetailState from "@/apps/core/application/state/exhibitionDetailState";
import ExhibitionDetailViewModel from "@/apps/core/application/viewmodels/exhibitionDetailViewModel";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { FC, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import PG from '@/assets/PG.png'
import back from '@/assets/back.png'
import next from '@/assets/forward.png'
import Thefooter from "@/lib/components/footer/footer";

const data = [
	{
	  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMOwR-_45OiadN8CymKhw08QALAidVKLYJPA8Zgn9qS0mn2c_wbbi4c2npgeVcdD3hTs&usqp=CAU',
	  title: 'Title 1',
	  subtitle: 'Subtitle 1'
	},
	{
	  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/3.jpg?alt=media&token=e389affd-1260-415d-bbc5-5d23ff3bd0d5',
	  title: 'Title 2',
	  subtitle: 'Subtitle 2'
	},
	{
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMOwR-_45OiadN8CymKhw08QALAidVKLYJPA8Zgn9qS0mn2c_wbbi4c2npgeVcdD3hTs&usqp=CAU',
		title: 'Title 1',
		subtitle: 'Subtitle 1'
	  },
	  {
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/3.jpg?alt=media&token=e389affd-1260-415d-bbc5-5d23ff3bd0d5',
		title: 'Title 2',
		subtitle: 'Subtitle 2'
	  },
	  {
		imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMOwR-_45OiadN8CymKhw08QALAidVKLYJPA8Zgn9qS0mn2c_wbbi4c2npgeVcdD3hTs&usqp=CAU',
		title: 'Title 1',
		subtitle: 'Subtitle 1'
	  },
	  {
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/3.jpg?alt=media&token=e389affd-1260-415d-bbc5-5d23ff3bd0d5',
		title: 'Title 2',
		subtitle: 'Subtitle 2'
	  },
	// Add more items as necessary
  ];

interface ExhibitionDetailViewProps{
	exhibitionID: string
	
}

export default class ExhibitionDetailView extends ViewModelView<ExhibitionDetailViewModel, ExhibitionDetailViewProps,  ExhibitionDetailState>{
	
	
	onCreateViewModel(state: ExhibitionDetailState): ExhibitionDetailViewModel {
		return new ExhibitionDetailViewModel(state, this.setState.bind(this));
	}
	onCreateState(): ExhibitionDetailState {
		return new ExhibitionDetailState(this.props.exhibitionID)
	}
	

	onCreateMain(): ReactNode {
		return (
			<div>
				<div className='hidden lg:flex flex-row items-center justify-between px-16 pt-10 '>
					<div className='flex flex-row items-center space-x-10 text-3xl font-medium leading-none'>
						<img className='h-8' src={PG} />
					</div>
					<div className='flex flex-row items-center space-x-10  text-3xl font-medium leading-none text-black'>
						<a href="/exhibitions">Exhibition</a>
						<a href="/search">Shop</a>
						<a href="/search">Contact</a>
						<a href="/search">About</a>

				  </div>
			  	</div>
				<div className="h-16"></div>
				<SlideShow images={['https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/3.jpg?alt=media&token=e389affd-1260-415d-bbc5-5d23ff3bd0d5','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMOwR-_45OiadN8CymKhw08QALAidVKLYJPA8Zgn9qS0mn2c_wbbi4c2npgeVcdD3hTs&usqp=CAU']} />
				<div className="w-full mt-28 px-16">
					<p className="text-5xl">SPIRIT OF AN ART</p>
					<div className="flex flex-row items-center mt-10 mb-4">
						<p className="text-2xl text-black mr-8">ALEMAYEHU ZEWDIE</p>
						<p className="text-2xl text-[#787878]">25 MAY - 7 JUN 2023</p>
					</div>
					<p className="text-2xl text-[#616161] leading[28px]">
						Feminine art is a form of art that is created by women or focuses on women's experiences, perspectives, and issues. It is a diverse and multifaceted genre that encompasses a wide range of styles, techniques, and subject matter. Feminine art often explores themes such as gender identity, sexuality, motherhood, domesticity, body image, and social and political inequalities. Feminine art can be expressed through various mediums such as painting, sculpture, photography, performance art, and installation art. <br/><br/>
						Feminine art is a form of art that is created by women or focuses on women's experiences, perspectives, and issues. It is a diverse and multifaceted genre that encompasses a wide range of styles, techniques, and subject matter. Feminine art often explores themes such as gender identity, sexuality, motherhood, domesticity, body image, and social and political inequalities. Feminine art can be expressed through various mediums such as painting, sculpture, photography, performance art, and installation art. 
					</p>
				</div>
				<div className="w-full flex flex-row items-center justify-center mt-14 mb-8"><p className="pl-20 pr-4 text-2xl text-[#8E8E8E]">ARTWORKS</p> <LineWithWidth10 /></div>
				<div className="w-full flex justify-center items-center px-16">
					<Grid 
						data={data}						  // .  
					/>
				</div>
				<div className="w-full border-b border-[#8E8E8E] mt-10"></div>
				<Thefooter />
				{this.state.exhibiton!.name}<br/>
				{this.state.exhibiton!.venue}
				
			</div>
		)
	}


}


export function RoutedExhibitionDetailView(){
	let params = useParams();
	return <ExhibitionDetailView exhibitionID={params.id!}/>

}


interface SlideShowProps {
	images: string[];
  }
  
  const SlideShow: FC<SlideShowProps> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
  
	const handlePrev = () => {
	  if (activeIndex > 0) {
		setActiveIndex(activeIndex - 1);
	  } else {
		setActiveIndex(images.length - 1);
	  }
	};
  
	const handleNext = () => {
	  if (activeIndex < images.length - 1) {
		setActiveIndex(activeIndex + 1);
	  } else {
		setActiveIndex(0);
	  }
	};
  
	return (
	  <div className="w-full m-auto flex flex-row items-center justify-between px-24">
		<button
		  className="p-2 bg-white opacity-50"
		  onClick={handlePrev}
		>
		  <img className="w-10 h-10" src={back} />
		</button>
		<div
		  className="w-5/12 h-[500px] bg-no-repeat bg-cover object-cover"
		  style={{ backgroundImage: `url(${images[activeIndex]})` }}
		  
		/>
  
		<button
		  className="p-2 bg-white opacity-50"
		  onClick={handleNext}
		>
		  <img className="w-10 h-10" src={next} />
		</button>
	  </div>
	);
  };

  const LineWithWidth10 = () => {
	return (
	  <div className="w-full border-b border-[#8E8E8E]"></div>
	);
  };

  
  interface GridItemProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const GridItem: React.FC<GridItemProps> = ({ imageUrl, title, subtitle }) => (
    <div 
        className="w-56 h-72  bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
    >
		<div className="w-full h-full flex items-end justify-center" style={{ backgroundImage: 'linear-gradient(2.3deg, rgba(0, 0, 0, 0.7) 2%, rgba(0, 0, 0, 0) 100%)'}}>
			<div className="text-white text-center">
				<h2 className="font-bold">{title}</h2>
				<p>{subtitle}</p>
			</div>
		</div>
    </div>
);

interface GridProps {
    data: Array<{ imageUrl: string, title: string, subtitle: string }>;
}

const Grid: React.FC<GridProps> = ({ data }) => (
    <div className="grid grid-flow-row-dense grid-cols-4 gap-4">
        {data.map((item, index) => (
            <GridItem key={index} imageUrl={item.imageUrl} title={item.title} subtitle={item.subtitle} />
        ))}
    </div>
);