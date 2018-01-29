import React from "react";

export default function JobForm({createJob, titlePlaceholder, payPlaceholder, descriptionPlaceholder}) {
 return <form className="job-form" onSubmit={createJob}>
   <label htmlFor="title">Title</label>
   <input type="text" name="title" placeholder={titlePlaceholder}/>
   <label htmlFor="pay">Compensation</label>
   <input type="text" name="pay" placeholder={payPlaceholder} />
   <label htmlFor="description">Description</label>
   <textarea name="description" rows="8" cols="40" placeholder={descriptionPlaceholder}></textarea>
   <input type="submit" name="submit" value="Submit" />
 </form>
}
