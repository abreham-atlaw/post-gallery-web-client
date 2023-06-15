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
				<SlideShow images={this.state.exhibiton!.artworkIds} />
				<div className="w-full mt-28 px-16">
					<p className="text-5xl">{this.state.exhibiton!.name}</p>
					<div className="flex flex-row items-center mt-10 mb-4">
						<p className="text-2xl text-black mr-8 uppercase">{this.state.exhibiton!.artist!.fullName}</p>
						<p className="text-2xl text-[#787878]">{this.state.exhibiton!.dateRange.startDate.toDateString()} - {this.state.exhibiton!.dateRange.endDate.toDateString()}</p>
					</div>
					<p className="text-2xl text-[#616161] leading[28px]">
					{this.state.exhibiton!.description}
					</p>
				</div>
				<div className="w-full flex flex-row items-center justify-center mt-14 mb-8"><p className="pl-20 pr-4 text-2xl text-[#8E8E8E]">ARTWORKS</p> <LineWithWidth10 /></div>
				<div className="w-full flex justify-center items-center px-16">
					<Grid 
						data={this.state.exhibiton!.artworks!}						  // .  
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
    data: Artwork[];
}

const Grid: React.FC<GridProps> = ({ data }) => (
    <div className="grid grid-flow-row-dense grid-cols-4 gap-4">
        {data.map((item, index) => (
            <GridItem key={index} imageUrl={item.images[0]} title={item.artist!.fullName} subtitle={item.name} />
        ))}
    </div>
);