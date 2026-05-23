function createCard (title, CName, views, monthsOld, duration) {
    const titleElement = document.querySelector(".video-title");
    const channelName = document.querySelector(".channel-name");
    const viewCount = document.querySelector(".view-count");
    const uploadDate = document.querySelector(".upload-date");
    const videoDuration = document.querySelector(".video-duration");

    titleElement.textContent = title;
    channelName.textContent = CName;
    viewCount.textContent = `${views} views`;
    uploadDate.textContent = `${monthsOld} months ago`;
    videoDuration.textContent = duration;    
}

createCard("How to Make a Webpage", "CodeAcademy", 1000000, 2, "10:00");