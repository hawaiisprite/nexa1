if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::DesktopMDI");
        this.set_datatyperule("2.0");
        this.set_usehttpkeepalive("true");
        this.set_filesecurelevel("all");
        this.set_loadingimage("url(\'theme::PcMdi/images/loadingimage.gif\')");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");
        nexacro._addService("svcUrl", "JSP", "http://127.0.0.1:4098/", "none", null, "", "0", "0");
        nexacro._addService("license", "file", "./license/", "session", null, "", "0", "0");
        nexacro._addService("DesktopMDILib", "file", "./_extlib_/DesktopMDILib/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("common", "form", "./common/", "session", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "session", null, "", "0", "0");
        nexacro._addService("design", "form", "./design/", "session", null, "", "0", "0");
        nexacro._addService("samplefile", "file", "./samplefile/", "none", null, "", "0", "0");
        nexacro._addService("Service0", "JSP", "http://localhost:8080/education", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
        		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript"},
        		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript"},
        		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript"},
        		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evMessagePopup", "true");
        nexacro.setEnvironmentVariable("evQuickView", "Y");
        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information

	
    // User Script

					
    env = null;
    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
