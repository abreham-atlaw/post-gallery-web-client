import ExhibitionDetailState from "@/apps/core/application/state/exhibitionDetailState";
import ExhibitionDetailViewModel from "@/apps/core/application/viewmodels/exhibitionDetailViewModel";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { FC, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import PG from '@/assets/PG.png'
import back from '@/assets/back.png'
import next from '@/assets/forward.png'
import Thefooter from "@/lib/components/footer/footer";
import Artwork from "@/apps/core/data/models/artwork";

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
				<div className='hidden lg:flex flex-row items-center justify-between pr-10 pl-20 pt-14 '>
					<div className='flex flex-row items-center space-x-10 text-3xl font-medium leading-none'>
						<img className='w-16' src={PG} />
					</div>
					<div className='flex flex-row items-center space-x-10  text-3xl font-medium leading-none text-black'>
						<a href="/exhibitions">Exhibition</a>
						<a href="/search">Shop</a>
						<a href="/search">Contact</a>
						<a href="/search">About</a>

				  </div>
			  	</div>
				<div className="lg:h-16"></div>
				<SlideShow artworks={this.state.exhibiton!.artworks!} />
				<div className="w-full lg:mt-24 p-4 lg:px-16">
					<p className="text-5xl">{this.state.exhibiton!.name}</p>
					<div className="flex flex-row items-center mt-10 mb-4">
						<p className="text-2xl text-black mr-8 uppercase">{this.state.exhibiton!.artist!.fullName}</p>
						<p className="text-2xl text-[#787878]">{this.state.exhibiton!.dateRange.startDate.toDateString()} - {this.state.exhibiton!.dateRange.endDate.toDateString()}</p>
					</div>
					<p className="text-2xl text-[#616161] leading[28px]">
					{this.state.exhibiton!.description}
					</p>
				</div>
				<div className="w-full flex flex-row items-center justify-center mt-14 mb-8"><p className="pl-16 pr-4 text-2xl text-[#8E8E8E]">ARTWORKS</p> <LineWithWidth10 /></div>
				<div className="w-full flex justify-center items-center p-4 py-8 lg:px-16">
					<Grid 
						data={this.state.exhibiton!.artworks!}						  // .  
					/>
				</div>
				<div className="w-full border-b border-[#D9DBE9] mt-10"></div>
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
	artworks: Artwork[]
  }
  
  const SlideShow: FC<SlideShowProps> = ({ artworks }) => {
	const [activeIndex, setActiveIndex] = useState(0);
  
	const handlePrev = () => {
	  if (activeIndex > 0) {
		setActiveIndex(activeIndex - 1);
	  } else {
		setActiveIndex(artworks.length - 1);
	  }
	};
  
	const handleNext = () => {
	  if (activeIndex < artworks.length - 1) {
		setActiveIndex(activeIndex + 1);
	  } else {
		setActiveIndex(0);
	  }
	};
  
	return (
	  <div className="w-full p-4 m-auto flex flex-row items-center justify-between lg:px-28">
		<button
		  className="p-2 bg-white opacity-50"
		  onClick={handlePrev}
		>
		  <img className="w-10 h-12" src={back} />
		</button>
		<div
		  className="flex flex-col items-center justify-end text-white text-center w-5/12 h-72 lg:h-[530px] bg-no-repeat bg-cover object-cover"
		  style={{ backgroundImage: `url(${artworks[activeIndex].images[0]})` }}
		  
		>
			<div className="hidden lg:inline w-full pb-6 pt-6" style={{ 
				background: "linear-gradient(2.3deg, rgba(0, 0, 0, 0.7) 1.9%, rgba(0, 0, 0, 0) 100%)" 
			}}>
			
				<p className="text-3xl font-bold">{artworks[activeIndex].name}, 2013</p>
				<p className="text-2xl font-bold">{artworks[activeIndex].artist!.fullName}</p>
				<p className="text-2xl font-bold">{artworks[activeIndex].creationDate.getFullYear()}</p>
			</div>
		</div>
  
		<button
		  className="p-2 bg-white opacity-50"
		  onClick={handleNext}
		>
		  <img className="w-10 h-12" src={next} />
		</button>
	  </div>
	);
  };

  const LineWithWidth10 = () => {
	return (
	  <div className="w-full border-b-2 border-[#DCDCDC]"></div>
	);
  };

  
  interface GridItemProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

const GridItem: React.FC<GridItemProps> = ({ imageUrl, title, subtitle }) => (
    <div 
        className="w-full h-72  bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
    >
		<div className="w-full h-full flex items-end justify-center pb-4" style={{ backgroundImage: 'linear-gradient(2.3deg, rgba(0, 0, 0, 0.7) 2%, rgba(0, 0, 0, 0) 100%)'}}>
			<div className="text-white text-center">
				<h2 className="font-bold">{title}</h2>
				<p>{subtitle}</p>
			</div>
		</div>
    </div>
);

interface GridProps {
    data: Artwork[];
}

const Grid: React.FC<GridProps> = ({ data }) => (
    <div className="w-full grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 gap-6 gap-y-14">
        {data.map((item, index) => (
            <GridItem key={index} imageUrl={item.images[0]} title={item.artist!.fullName} subtitle={item.name} />
        ))}
    </div>
);