import WriteBlogState from "@/apps/admin/application/states/writeBlogState";
import EditBlogViewModel from "@/apps/admin/application/viewmodels/editBlogViewModel";
import DefaultFileUploadComponent, { DefaultImageUploadComponent } from "@/apps/core/presentation/components/DefaultFileUploadComponent";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import StatusToast from "@/lib/components/status/StatusToast";
import ViewModelView from "@/lib/components/views/ViewModelView";
import { FormEvent, ReactNode, useState } from "react";



export default abstract class WriteBlogView<P> extends ViewModelView<EditBlogViewModel, P, WriteBlogState>{
	
	private handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		await this.getViewModel().save();
	}

	

	onCreateMain(): ReactNode {
		
		return (<div>
			<form onSubmit={this.handleSubmit} className="px-6 lg:px-14 py-12">
				<a href="/admin/Dashboard" className="text-xl font-medium">Dashboard/<span className="text-[#A1A6B3]">Upload Blog</span></a>
				<div className="w-full pt-10 pb-6 mb-3 border-b-2 border-[#C1C1C1] flex flex-row justify-between">
					<p className="text-3xl lg:text-4xl font-bold">Upload Blog</p>
					<Switcher />
					<button type="submit" className="flex items-center px-4 py-1 lg:px-12 lg:pt-2 lg:pb-2 bg-black text-white rounded-full">
						<div className="justify-center text-sm lg:text-xl">Publish</div>
					</button>
				</div>

				<div className="lg:pl-8 ">
					<p className="mt-8 mb-6">⚫<span className="text-2xl font-medium">   Blog details</span></p>
					<StatusToast asyncState={this.state} errorText={this.state.error?.message}/>
					
					<div className="w-full lg:w-4/6">
						<div className="text-xl text-[#5E5E64] font-medium mt-4 mb-2">
							<label htmlFor="name">Title: <span className="text-red-500 required-dot"> *</span></label>
							<div className="h-2"></div>
							<TextFieldComponent field={this.state.form.title} syncer={this.getViewModel().syncState} />
						</div>
						<div className="h-4"></div>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Cover <span className="text-red-500 required-dot"> *</span></p>
						<DefaultImageUploadComponent field={this.state.form.cover}/>
						<div className="h-4"></div>
						<p className="text-xl text-[#5E5E64] font-medium mt-2.5 mb-2">Content <span className="text-red-500 required-dot"> *</span></p>
						<DefaultFileUploadComponent field={this.state.form.content}/>
					</div>
				</div>
			</form>
		</div>)
	}

}

const Switcher = () => {
	const [isChecked, setIsChecked] = useState(false)
  
	const handleCheckboxChange = () => {
	  setIsChecked(!isChecked)
	}
  
	return (
	  <>
		<label className='flex cursor-pointer select-none items-center'>
		  <div className='relative'>
			<input
			  type='checkbox'
			  checked={isChecked}
			  onChange={handleCheckboxChange}
			  className='sr-only'
			/>
			<div className='box bg-[#00A3FF] block h-16 w-40 rounded-full'></div>
			<div
			  className={`dot absolute top-1 bg-white flex h-14 w-14 items-center justify-center rounded-full transition  ${
				isChecked ? 'left-1' : 'right-1'
			  }`}
			></div>
		  </div>
		</label>
	  </>
	)
  }