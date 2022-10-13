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

    public IndexModelSH6(ILogger<IndexModelSH6> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        MiMensaje = "Antropologías, senato, música, JorgeAML Ú";
        Parrafo = "En mi corta estadía en el instituto de Investigaciones históricas, Antropológicas y Arqueológicas a finales del año 1987 se implementó el inicio de un programa que se tituló:";


    }
}