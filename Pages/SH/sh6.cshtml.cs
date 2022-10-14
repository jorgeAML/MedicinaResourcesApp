using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.Design;
using System.Security.Policy;

namespace MedicinaResourcesApp.Pages;

public class IndexModelSH6 : PageModel
{
    //VARIABLES
    string T2 = "Desarrollo desigual de la econom�a Guatemalteca";
    string P2A = "Entre otras peculiaridades, la sociedad guatemalteca se caracteriza por lo heterog�neo de la plataforma geogr�fica-natural sobre la cual asienta su desarrollo. ";
    string P2B = "En el transcurso del tiempo, mientras unas zonas se constituyen en estrat�gicas, otras son marginales y otras quedan en car�cter de reserva o sin ser integradas. ";
    string P2C = "La diversidad de climas provoca condiciones distintas para el cultivo y la producci�n. ";
    string P2D = "Sin embargo, la variabilidad geogr�fica-natural no ha sido utilizada estrat�gicamente para el desarrollo progresivo de la sociedad en su conjunto, sino que en funci�n de intereses de minor�as que se alternan el poder. ";
    string P2E = "Las zonas que en el pasado fueron estrat�gicas son aquellas cuyos productos garantizan la monetizaci�n de los grupos ya mencionados, que la usan en la compra de art�culos suntuarios y aquellas zonas que reproducen la fuerza de trabajo.";
    string P2F = "Aparte de estas dos zonas estrat�gicas en la existencia de los grupos dominantes, y como tal, del desarrollo econ�mico, hay otras con un cierto peso por el intercambio regional y en la existencia de econom�as de subsitencia. ";
    string P2G = "La ciudad se garantizaba en su entorno la existencia de una franja en donde se ubican los pueblos que abastecen de los bienes agr�colas y, las haciendas, para la producci�n de la panela, ganado y otros art�culos; m�s all� estaban las zonas en donde se produc�an granos b�sicos y art�culos de acuerdo a la divisi�n regional de la producci�n; desde luego, hab�a una franja de influencia que las ciudades y las oligarqu�as locales defin�an para su existencia. ";


    //PAGEMODEL
    private readonly ILogger<IndexModelSH6> _logger;
    public string MiMensaje { get; private set; } = "PageModel in C#";
    public string Parrafo { get; private set; } = "PageModel in C#";
    public string Parrafo2 { get; private set; } = "PageModel in C#";

    public string Titulo2 { get; private set; } = "PageModel in C#";
    public string Parrafo2A { get; private set; } = "PageModel in C#";
    public string Parrafo2B { get; private set; } = "PageModel in C#";
    public string Parrafo2C { get; private set; } = "PageModel in C#";

    public IndexModelSH6(ILogger<IndexModelSH6> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        MiMensaje = "Antropolog�as, senato, m�sica, JorgeAML �";
        Parrafo = "En mi corta estad�a en el instituto de Investigaciones hist�ricas, Antropol�gicas y Arqueol�gicas a finales del a�o 1987 se implement� el inicio de un programa que se titul�: El proceso de industrializaci�n en Guatemala de 1871 a 1988, en el cual se seleccion� a estudiantes que presentaban un perfil de excelencia acad�mica en el �rea de Historia.";
        Parrafo2 = "En tres meses se llev� a cabo un proceso de conscripci�n documental y bibliogr�fica";

        Titulo2 = T2;
        Parrafo2A = P2A + P2B + P2C + P2D;
        Parrafo2B = P2E;
        Parrafo2C = P2F + P2G;

    }
}