using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.Design;
using System.Security.Policy;

namespace MedicinaResourcesApp.Pages;

public class IndexModelSH6 : PageModel
{
    private readonly ILogger<IndexModelSH6> _logger;
    public string MiMensaje { get; private set; } = "PageModel in C#";
    public string Parrafo { get; private set; } = "PageModel in C#";
    public string Parrafo2 { get; private set; } = "PageModel in C#";

    public IndexModelSH6(ILogger<IndexModelSH6> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        MiMensaje = "Antropolog�as, senato, m�sica, JorgeAML �";
        Parrafo = "En mi corta estad�a en el instituto de Investigaciones hist�ricas, Antropol�gicas y Arqueol�gicas a finales del a�o 1987 se implement� el inicio de un programa que se titul�: El proceso de industrializaci�n en Guatemala de 1871 a 1988, en el cual se seleccion� a estudiantes que presentaban un perfil de excelencia acad�mica en el �rea de Historia.";
        Parrafo2 = "En tres meses se llev� a cabo un proceso de conscripci�n documental y bibliogr�fica";

    }
}