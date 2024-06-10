(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("TopFrame");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            this.set_background("#42458C");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","-30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_text("");
            obj.set_background("#8282C2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","-8.00","0","218","81",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_image("url(\'imagerc::inc_logo1_dnue.gif\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","260.00","8","69","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("소속 :");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00_00","520.00","8","102","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교수번호 : ");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","625.00","13","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00_00_00","800.00","8","102","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("성명 : ");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","905.00","13","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","336","13","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","240","44","1020","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("+++++++++++++연구과제를선택하세요++++");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","1110","11","144","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("다시 선택하기");
            obj.set_color("white");
            obj.set_background("#42458c");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	frmTop.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvFirstGap 		= 0;
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 50;
        this.fvTopBtnPrefix 	= "TOP_";
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {

        };

        /**
         * @description 화면 리사이징
         */
        this.form_onsize = function(obj,e)
        {
        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //로그아웃
        this.fnLogout = function ()
        {
        	if(system.navigatorname == "nexacro")
        	{
        		nexacro.getApplication().exit();
        	}
        	else
        	{
        		window.top.location.reload(true);
        	}
        };







        /**
         * @description 버튼 redraw
         */
        this.fnRedrawBtn = function ()
        {
        	// 모든 버튼 체크
        	this.fnCheckShowBtnAll();
        };

        /**
         * @description 모든 버튼 체크
         */
        this.fnCheckShowBtnAll = function ()
        {
        	if (this.dsMenu.rowcount == 0) return;

        	var objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	var objTopLast = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));

        	var nLeft = objTopFirst.getOffsetLeft();
        	var nRight = objTopLast.getOffsetRight();

        	if (this.divTopBtn.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        };

        /**
         * @description menu tab 버튼 첫번째 이동 함수
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var sTopId;
        	var objTop;
        	var objTopFirst;

        	nIndex = this.fnGetFirstTopIndex();

        	if (nIndex < 0) return;

        	if (nMoveIdx < 0) return;

        	if (nMoveIdx >= this.dsMenu.rowcount) return;

        	sTopId = this.dsMenu.getColumn(nIndex, this.FRAME_MENUCOLUMNS.menuId);
        	objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	sTopId = this.dsMenu.getColumn(nMoveIdx, this.FRAME_MENUCOLUMNS.menuId);
        	objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	var nShiftPos = objTop.getOffsetLeft() - objTopFirst.getOffsetLeft();
        	for (var i = 0; i < this.dsMenu.rowcount; i++)
        	{
        		sTopId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);
        		objTop.move(objTop.getOffsetLeft() - nShiftPos, objTop.getOffsetTop());
        	}
        };

        /**
         * @description menu top 버튼 첫번째 index 가져오는 함수
         */
        this.fnGetFirstTopIndex = function ()
        {
        	for (var i=0; i < this.dsMenu.rowcount;i++)
        	{
        		var sTopID  = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopID);
        		if (this.gfnIsNull(objTop) == false)
        		{
        			if (0 <= objTop.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        };

        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divTopBtn.form.components[sId];
        };



        // /*******************************************************************************************************************************
        //  * 각 COMPONENT 별 EVENT 영역
        // *******************************************************************************************************************************/
        /**
         * @description Logo click
         */
        this.staLogo_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onlayoutchanged",this.frmTop_onlayoutchanged,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
