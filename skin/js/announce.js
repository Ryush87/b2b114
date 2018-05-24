/* announce_view */
/*
jQuery('.announcePriceBox .apTitle .apT3').click(function(){
	var tempApTitle=jQuery(this).parent();
	var tempList=jQuery(this).parent().next();
	var tempIcon=jQuery(this).find('i');
	if(tempList.css('display')=="block"){
		tempApTitle.removeClass('apTitleAct');
		tempList.slideUp();
		tempIcon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
	}else{
		jQuery('.apTitle').removeClass('apTitleAct');
		jQuery('.apList').slideUp();
		jQuery('.apTitle .apT3 i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		tempApTitle.addClass('apTitleAct');
		tempList.slideDown();
		tempIcon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}
});
*/
function currentSlidePriceInfo(aptNum){
	var tempApTitle=jQuery('.announcePriceBox .apTitle').eq(aptNum);
	var tempList=jQuery(this).parent().next();
	if(tempList.css('display')=="block"){
		tempApTitle.removeClass('apTitleAct');
		tempList.slideUp();
		tempIcon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
	}else{
		jQuery('.apTitle').removeClass('apTitleAct');
		jQuery('.apList').slideUp();
		jQuery('.apTitle .apT3 i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		tempApTitle.addClass('apTitleAct');
		tempList.slideDown();
		tempIcon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}
}
//currentSlidePriceInfo(1);

